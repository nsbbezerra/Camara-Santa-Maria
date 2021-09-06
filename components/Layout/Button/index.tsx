import React from "react";
import { Press } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCircleNotch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Props {
  children?: React.ReactNode | undefined;
  onClick?: () => void;
  icon?: any;
  disable?: boolean;
  scheme: "green" | "blue" | "gray";
  size: "small" | "medium" | "large";
  full?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  scheme = "gray",
  size = "medium",
  icon = null,
  disable = false,
  full = false,
  loading = false,
  ...rest
}) => {
  return (
    <Press
      {...rest}
      onClick={onClick}
      scheme={scheme}
      size={size}
      full={full}
      disabled={loading === true ? true : disable}
    >
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ loop: Infinity, duration: 1 }}
          style={{
            marginRight: 10,
          }}
        >
          <FontAwesomeIcon icon={faSpinner} />
        </motion.div>
      ) : (
        <>
          {icon && <FontAwesomeIcon icon={icon} style={{ marginRight: 10 }} />}
        </>
      )}
      {children}
    </Press>
  );
};

export default Button;
