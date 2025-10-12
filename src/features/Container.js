import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function ContainerBase({ className, children }) {
  return <main className={className}>{children}</main>;
}
ContainerBase.propTypes = { className: PropTypes.string, children: PropTypes.node };

const Container = styled(ContainerBase)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;
`;

export default Container;
