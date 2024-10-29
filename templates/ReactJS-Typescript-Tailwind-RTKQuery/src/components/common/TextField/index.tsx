import { InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Textfield } from "../../customized/styleComp";

function TextField(props: any) {
  const {
    label,
    onChange,
    value,
    name,
    errors,
    type,
    open,
    onIconClick,
    isIcon,
    field,
    inputProps,
    required,
    ...elem
  } = props;

  const InputField = field || Textfield;
  return (
    <>
      <div className="flex flex-col mt-4">
        <label htmlFor="" className="text-sm mb-1 font-semibold">
          {" "}
          {label} <span className="require">{required && "*"}</span>{" "}
        </label>
        <InputField
          fullWidth
          name={name}
          onChange={onChange}
          type={type}
          autoComplete="off"
          value={value}
          InputProps={
            isIcon && {
              endAdornment: (
                <InputAdornment position="end">
                  {
                    <span
                      onClick={() => onIconClick()}
                      className="cursor-pointer w-6"
                    >
                      {!open ? <VisibilityOff /> : <Visibility />}
                    </span>
                  }
                </InputAdornment>
              ),
            }
          }
          inputProps={inputProps}
          {...elem}
        />
        {errors && <div className="text-red font-sm">{errors}</div>}
      </div>
    </>
  );
}

export default TextField;
