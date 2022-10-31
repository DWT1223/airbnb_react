import styled from "styled-components"

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 60px 30px;
  .title{
    margin-left: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255, .8);
  }
`