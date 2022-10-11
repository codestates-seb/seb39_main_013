/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { mobile, tablet } from "../../utils/styleTheme";
import useSearch from "../../hooks/useSearch";
import { debounce } from "lodash";
import { Link, useLocation } from "react-router-dom";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const getSearchItem = useSearch(keyword);
  const location = useLocation();
  const searchRef = useRef();

  const updateQuery = useCallback(() => {
    getSearchItem.refetch();
  }, []);

  const delayQuery = useCallback(debounce(updateQuery, 800), [keyword]);
  const inputChangeHandler = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    function handleOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setInputFocus(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [searchRef]);

  useEffect(() => {
    setKeyword("");
  }, [location.pathname]);

  useEffect(() => {
    if (keyword.length > 1) {
      delayQuery();
    }
    return delayQuery.cancel;
  }, [keyword, delayQuery]);

  return (
    <Container>
      <Wrapper>
        <input
          onFocus={() => setInputFocus(true)}
          onChange={(e) => inputChangeHandler(e)}
          value={keyword}
        />
        <BiSearch />
      </Wrapper>
      {getSearchItem?.data && (
        <SearchKeyword ref={searchRef} isFocus={inputFocus}>
          <ul>
            {getSearchItem?.data?.map((v) => {
              return (
                <li key={v.product_id}>
                  <Link to={`/detail/${v.product_id}`}>{v.name}</Link>
                </li>
              );
            })}
          </ul>
        </SearchKeyword>
      )}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  border-bottom: 1px solid #565656;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  input {
    padding: 0 4px;
    line-height: 1.5rem;
    border: none;
    width: 100%;
    outline: none;
    font-size: 1rem;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media ${tablet} {
    max-width: 100px;
  }

  @media ${mobile} {
    max-width: 80px;
  }
`;

const SearchKeyword = styled.div`
  width: 100%;
  position: absolute;
  top: 60px;
  max-height: 200px;
  max-width: 460px;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  display: ${(props) => (props.isFocus ? "block" : "none")};

  @media ${tablet} {
    max-width: 380px;
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 6px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
  }

  a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: black;
    display: block;
    padding: 8px;
  }

  li {
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    &:last-child {
      margin: 0;
    }

    &:hover {
      background-color: #2d7df4;

      a {
        color: #fff;
      }
    }
  }
`;
