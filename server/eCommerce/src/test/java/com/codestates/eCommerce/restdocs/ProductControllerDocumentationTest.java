package com.codestates.eCommerce.restdocs;

import com.codestates.eCommerce.common.config.matterMost.MatterMostSender;
import com.codestates.eCommerce.product.controller.impl.ProductControllerImplV2;
import com.codestates.eCommerce.product.domain.service.AppProductSerivce;
import com.codestates.eCommerce.product.domain.service.ProductService;
import com.codestates.eCommerce.product.dto.ProductConditionDto;
import com.codestates.eCommerce.product.dto.ProductResponseDto;
import com.codestates.eCommerce.restdocs.helper.StubData;
import com.codestates.eCommerce.security.auth.PrincipalDetails;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.data.mapping.model.SnakeCaseFieldNamingStrategy;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static com.codestates.eCommerce.restdocs.helper.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.eCommerce.restdocs.helper.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/* Todo 슬라이스테스트 + REST DOCS
참고자료 : https://shinsunyoung.tistory.com/94
 */
@WebMvcTest(ProductControllerImplV2.class)
@AutoConfigureRestDocs
@MockBean(JpaMetamodelMappingContext.class)
public class ProductControllerDocumentationTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AppProductSerivce appProductSerivce;
    @MockBean
    private ProductService productService;
    @Autowired
    private Gson gson;
    @MockBean
    private MatterMostSender mmSender;
    @MockBean
    private PrincipalDetails principalDetails;

    @DisplayName("상품 페이지 가져오기")
    @WithMockUser
    @Test
    public void getProductsPageTest() throws Exception {
        //given
        ProductConditionDto request = StubData.Product.getProductConditionDto();
        ObjectMapper objectMapper = new ObjectMapper().setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE);
        String requestContent = objectMapper.writeValueAsString(request);
        Page<ProductResponseDto> response = StubData.Product.getMultiPageProductResponseDto();
        given(appProductSerivce.getProductPageV2(Mockito.any(ProductConditionDto.class))).willReturn(response);
        // when
        ResultActions actions =
                mockMvc.perform(
                        get("/api/v2/products")
                                .param("page","1")
                                .param("page_size","10")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestContent)
                );
        // then

        actions
                .andExpect(status().isOk())
                .andDo(
                        document(
                                "get-product-page",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                requestParameters(List.of(
                                                parameterWithName("page").description("Page 번호"),
                                                parameterWithName("page_size").description("Page 사이즈"),
                                                parameterWithName("brand_id").optional().description("브랜드 식별자"),
                                                parameterWithName("brand_name").optional().description("브랜드 이름"),
                                                parameterWithName("major_class").optional().description("상품 대분류"),
                                                parameterWithName("name").optional().description("상품 이름"),
                                                parameterWithName("max_price").optional().description("가격의 최대 범위"),
                                                parameterWithName("min_price").optional().description("가격의 최소 범위"),
                                                parameterWithName("color").optional().description("상품의 색(헥스코드)")
                                        )),
                                responseFields(
                                        List.of(
                                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("상품 배열"),
                                                fieldWithPath("data[].product_id").type(JsonFieldType.NUMBER).description("상품 식별자"),
                                                fieldWithPath("data[].brand_id").type(JsonFieldType.NUMBER).description("브랜드 식별자"),
                                                fieldWithPath("data[].brand_name").type(JsonFieldType.STRING).description("브랜드 이름"),
                                                fieldWithPath("data[].major_class").type(JsonFieldType.STRING).description("상품 대분류"),
                                                fieldWithPath("data[].name").type(JsonFieldType.STRING).description("상품 이름"),
                                                fieldWithPath("data[].price").type(JsonFieldType.NUMBER).description("상품 가격"),
                                                fieldWithPath("data[].color").type(JsonFieldType.STRING).description("상품 색"),
                                                fieldWithPath("data[].product_items").type(JsonFieldType.ARRAY).description("상품 아이템"),
                                                fieldWithPath("data[].product_items[].product_item_id").type(JsonFieldType.NUMBER).description("상품 아이템 식별자"),
                                                fieldWithPath("data[].product_items[].size").type(JsonFieldType.STRING).description("상품 아이템 사이즈"),
                                                fieldWithPath("data[].product_items[].stock").type(JsonFieldType.NUMBER).description("상품 재고"),
                                                fieldWithPath("data[].thumb_images").type(JsonFieldType.ARRAY).description("상품 썸네일 이미지"),
                                                fieldWithPath("data[].content_images").type(JsonFieldType.ARRAY).description("상품 컨텐츠 이미지"),
                                                fieldWithPath("page_info").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                                fieldWithPath("page_info.page").type(JsonFieldType.NUMBER).description("현재 페이지"),
                                                fieldWithPath("page_info.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
                                                fieldWithPath("page_info.total_elements").type(JsonFieldType.NUMBER).description("총 데이터 수"),
                                                fieldWithPath("page_info.total_pages").type(JsonFieldType.NUMBER).description("총 페이지 수")
                                        )
                                )
                        )
                );
    }

    @DisplayName("상품하나가져오기(아이템들과함께)")
    @WithMockUser
    @Test
    public void getProductWithItemList() throws Exception {
        //given
        Long productId = 1L;

        ProductResponseDto response = StubData.Product.getProductResponseDto(1L,"Nike 상품 1", StubData.Product.getProductItemResponseDtoList(1L));
        given(appProductSerivce.searchProductWithItemList(Mockito.anyLong())).willReturn(response);
        // when
        ResultActions actions =
                mockMvc.perform(
                        get("/api/v2/products/info/list/{product-id}",productId)
                );
        // then

        actions
                .andExpect(status().isOk())
                .andDo(
                        document(
                                "get-product-withItem",
                                getRequestPreProcessor(),
                                getResponsePreProcessor(),
                                pathParameters(
                                        parameterWithName("product-id").description("상품 식별자")
                                ),
                                responseFields(
                                        List.of(
                                                fieldWithPath("data").type(JsonFieldType.OBJECT).description("상품 객체"),
                                                fieldWithPath("data.product_id").type(JsonFieldType.NUMBER).description("상품 식별자"),
                                                fieldWithPath("data.brand_id").type(JsonFieldType.NUMBER).description("브랜드 식별자"),
                                                fieldWithPath("data.brand_name").type(JsonFieldType.STRING).description("브랜드 이름"),
                                                fieldWithPath("data.major_class").type(JsonFieldType.STRING).description("상품 대분류"),
                                                fieldWithPath("data.name").type(JsonFieldType.STRING).description("상품 이름"),
                                                fieldWithPath("data.price").type(JsonFieldType.NUMBER).description("상품 가격"),
                                                fieldWithPath("data.color").type(JsonFieldType.STRING).description("상품 색깔"),
                                                fieldWithPath("data.product_items[]").description(JsonFieldType.ARRAY).description("상품 아이템"),
                                                fieldWithPath("data.product_items[].product_item_id").description(JsonFieldType.NUMBER).description("상품 아이템 식별자"),
                                                fieldWithPath("data.product_items[].size").description(JsonFieldType.STRING).description("상품 아이템 사이즈"),
                                                fieldWithPath("data.product_items[].stock").description(JsonFieldType.NUMBER).description("상품 아이템 재고"),
                                                fieldWithPath("data.thumb_images").description(JsonFieldType.ARRAY).description("상품 썸네일 이미지"),
                                                fieldWithPath("data.content_images").description(JsonFieldType.ARRAY).description("상품 컨텐츠 이미지")
                                        )
                                )
                        )
                );
    }
//    public ResponseEntity<?> getProductWithItem(Long productId, String size);
//    public ResponseEntity<?> updateProduct(Long productId, RequestDto.Patch requestDto);
//    public ResponseEntity<?> getProductByName(String name) ;
}
