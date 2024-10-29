import { DefaultTheme, styled } from "styled-components";
import { theme } from "../../../styledProvider";

type TypoGraphyProps = {
  /**
   * optional className prop to overwrite styles
   */
  className?: string;
  /**
   * The text in different form
   */
  text?: string | number;
  /**
   * The weight of the text font
   */
  weight?: string;
  /**
   * The variant type being a header, body etc
   */
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "heading5"
    | "body"
    | "inline";
  /**
   * size variant signifying font size for a variant
   */
  size?: string;
  /**
   * is typography text link
   */
  link?: boolean;
  /**
   * hex code or rgba to show color for a text
   */
  color?: string;
  /**
   * Use text ellipsis
   */
  ellipsis?: boolean;
};

const sharedEllipsis = ({ ellipsis }: Partial<TypoGraphyProps>) => {
  return ellipsis
    ? "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
    : "";
};

const sharedWeight = (props: Partial<TypoGraphyProps>) => {
  switch (props.weight) {
    case "bold":
      return `font-weight: 800;`;
    case "semibold":
      return `font-weight: 600;`;
    case "medium":
      return `font-weight: 500;`;
    case "regular":
      return `font-weight: 400;`;
  }
};

const sharedColor = ({ color }: { color?: string; theme: DefaultTheme }) => {
  return color ? `color: ${color};` : `color: ${theme.colors.grey};`;
};

const textTypes = {
  heading1: { element: "h1" },
  heading2: { element: "h2" },
  heading3: { element: "h3" },
  heading4: { element: "h4" },
  heading5: { element: "h5" },
  body: { element: "p" },
  inline: { element: "span" },
};

const StyledHeader = styled.h1<Partial<TypoGraphyProps>>`
  ${sharedWeight}
  ${sharedColor}
  ${sharedEllipsis}
  ${(props) => {
    switch (props.size) {
      case "xl":
        return `
          font-size: 40px;
          line-height: 120%;
        `;

      case "md":
        return `
          font-size: 32px;
          line-height: 125%;
        `;

      case "sm":
        return `
          font-size: 28px;
          line-height: 130%;
        `;

      case "xs":
        return `
          font-size: 24px;
          line-height: 135%;
        `;
    }
  }}}
`;

const StyledParagraph = styled.p<Partial<TypoGraphyProps>>`
  ${sharedWeight}
  ${sharedColor}
  ${sharedEllipsis}
  ${(props) => {
    switch (props.size) {
      case "xll":
        return `
          font-size: 36px;
          line-height: 45px;
        `;

      case "xl":
        return `
          font-size: 20px;
          line-height: 140%;
        `;

      case "lg":
        return `
          font-size: 18px;
          line-height: 155%;
        `;

      case "md":
        return `
          font-size: 16px;
          line-height: 150%;
        `;

      case "sm":
        return `
          font-size: 14px;
          line-height: 145%;
        `;

      case "xs":
        return `
          font-size: 12px;
          line-height: 130%;
        `;
    }
  }}}
`;

const StyledSpan = styled.span<Partial<TypoGraphyProps>>`
  ${sharedWeight}
  ${sharedColor}
  ${sharedEllipsis}
  ${({ link }) => {
    return link && `text-decoration: underline; cursor: pointer;`;
  }}
  
  ${(props) => {
    switch (props.size) {
      case "lg":
        return `
          font-size: 18px;
          line-height: 155%;
        `;
      case "md":
        return `
          font-size: 16px;
          line-height: 150%;
      `;
      case "sm":
        return `
          font-size: 14px;
          line-height: 145%;
      `;
      case "xl":
        return `
        font-size: 12px;
        line-height: 120%;
        `;
    }
  }}}
`;

const TypoGraphy = ({
  text,
  variant = "body",
  link = false,
  ...other
}: TypoGraphyProps) => {
  if (variant?.startsWith("heading")) {
    const asTag = textTypes[variant].element;
    return (
      <StyledHeader as={asTag} {...other}>
        {text}
      </StyledHeader>
    );
  }
  if (variant === "body") {
    return <StyledParagraph {...other}>{text}</StyledParagraph>;
  }
  return (
    <StyledSpan {...other} link={link ? link : undefined}>
      {text}
    </StyledSpan>
  );
};

export default TypoGraphy;
