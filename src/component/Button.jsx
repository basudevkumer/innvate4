const Button = ({className,children}) => {
  return <a href="#" className={`text-[#fff] text-[18px]  font-semibold  font-nunito border border-[#fff] rounded-[18px] inline-block whitespace-nowrap   ${className}`} >{children}</a>;
};

export default Button;
