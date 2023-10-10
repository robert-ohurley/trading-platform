import {useContext} from "react";
import { SnackbarContext } from "../contexts/SnackbarContextProvider";

const useSnackbar = () => {
	return useContext(SnackbarContext)
}

export default useSnackbar;