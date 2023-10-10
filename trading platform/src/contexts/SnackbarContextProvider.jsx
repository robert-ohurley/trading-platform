import {createContext, useState, useEffect, useCallback, useMemo} from 'react';
import Snackbar from '@mui/material/Snackbar';
import react from 'react';
import MuiAlert from '@mui/material/Alert';


const AUTO_DISMISS = 4000;

const Alert = react.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export const SnackbarContext = createContext();

export const SnackbarContextProvider = ({ children }) => {
	const [alerts, setAlerts] = useState([])
	const activeAlertIds = alerts.join(',')

	useEffect(() => {
	  if (activeAlertIds.length > 0) {
		const timer = setTimeout(() => setAlerts((alerts) => alerts.slice(0, alerts.length - 1)), AUTO_DISMISS)
		return () => clearTimeout(timer)
	  }
	}, [activeAlertIds])

	const addAlert = useCallback((alert) => setAlerts(alerts => [alert, ...alerts]), [])

	const value = useMemo(() => addAlert, [addAlert])

	return (
		<SnackbarContext.Provider value={value}>
			{children}
			{alerts.map(alert => 
			<Snackbar 
				open={true}
				key={alert.message}
				>
					<Alert
						sx={{width: '15vw'}}
						severity={alert.severity}
						>
						{alert.message}
					</Alert>
			</Snackbar> 
			)}
		</SnackbarContext.Provider>
	) 
}


