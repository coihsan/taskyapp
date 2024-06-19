// "use client"
// import React, {useState, useEffect, useLayoutEffect, useRef} from "react";
// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert"
// import { FluentWifiWarning24Regular } from "../icons/wifi-error"

// const getOnLineStatus = () =>
//     typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
//         ? navigator.onLine
//         : true;

// const useNavigatorOnLine = () => {
//     const [status, setStatus] = useState(getOnLineStatus());

//     const setOnline = () => setStatus(true);
//     const setOffline = () => setStatus(false);

//     useEffect(() => {
//         window.addEventListener('online', setOnline);
//         window.addEventListener('offline', setOffline);

//         return () => {
//             window.removeEventListener('online', setOnline);
//             window.removeEventListener('offline', setOffline);
//         };
//     }, []);

//     return status;
// };

// function useDisplayMessage() {
//     const [show, close] = useState(false)
//   return (
//     <>
//         {
//             show ? (
//                 <div>
//                     {show}
//                 </div>
//             ) : (
//                 <div>
//                     {close}
//                 </div>
//             )
//         }
//     </>
//   )
// }

// const NetworkStatusIndicator = () => {
//     const { show, close } = useDisplayMessage();
//     const isOnline = useNavigatorOnLine();
//     const firstUpdate = useRef(true);

//     useLayoutEffect(() => {
//         if (firstUpdate.current) {
//             firstUpdate.current = false;
//             return;
//         }
//         isOnline
//             ? show('You are back online!')
//             : show('You are currently offline');
//     }, [close, show, isOnline]);

//     return null;
// };

