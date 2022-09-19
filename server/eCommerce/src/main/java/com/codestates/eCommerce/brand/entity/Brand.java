package com.codestates.eCommerce.brand.entity;

import com.codestates.eCommerce.common.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Brand extends BaseEntity {
    @Id
    @GeneratedValue
    private Long brandId;
    private String name;
    private String owner;
    private String companyNumber;
    private String mailOrderNumber;
    private String location;
    private String zipcode;
    private String address;
}
