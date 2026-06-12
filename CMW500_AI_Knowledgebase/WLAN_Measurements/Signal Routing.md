# Signal Routing

Module: WLAN Measurements
Source: aca77181cc474a57.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
Signal Routing
The following commands configure the scenario, select the input path for the measured signal and define an external attenuation value.
There is no command for selection of the switched MIMO scenario 
SMI4
. It is activated indirectly via the standard plus the receive mode.
List of Commands
ROUTe:WLAN:MEAS<i>:SCENario:SALone
ROUTe:WLAN:MEAS<i>:SCENario:CSPath
ROUTe:WLAN:MEAS<i>:SMIMo?
ROUTe:WLAN:MEAS<i>:SCENario:MIMO<PathCount>
CONFigure:WLAN:MEAS<i>:RFSettings:SANTennas
CONFigure:WLAN:MEAS<i>:MIMO:CTUPle
CONFigure:WLAN:MEAS<i>:SMIMo:NOANtennas
CONFigure:WLAN:MEAS<i>:RFSettings:ANTenna<n>
ROUTe:WLAN:MEAS<i>:SCENario?
ROUTe:WLAN:MEAS<i>?
ROUTe:WLAN:MEAS<i>:MIMO?
ROUTe:WLAN:MEAS<i>:SCENario:SMI<no>?
CONFigure:WLAN:MEAS<i>:RFSettings:EATTenuation
CONFigure:WLAN:MEAS<i>:RFSettings:EATTenuation<connector>
Top