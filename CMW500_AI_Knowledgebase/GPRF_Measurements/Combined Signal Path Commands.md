# Combined Signal Path Commands

Module: GPRF Measurements
Source: eeb1b8e64c6e4707.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
Combined Signal Path Commands
For some settings, the command to be used depends on the active scenario. While the combined signal path (CSP) scenario is active, these settings are configured via commands of the controlling signaling application. While the standalone (SA) scenario is active, they are configured via measurement commands.
The following mapping tables provide an overview of the affected GPRF commands.
For CSP, the commands of the LTE signaling application are listed as an example. Use the commands of the signaling application, that controls the GPRF measurement.
Mapping for RF settings
Setting
Commands for SA scenario
Commands for CSP scenario with LTE signaling
Connector, converter
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario:
​
SALone
ROUTe:
​
GPRF:
​
MEAS<i>:
​
SCENario:
​
CSPath
ROUTe:LTE:SIGN<i>:SCENario:...
External attenuation
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
EATTenuation
CONFigure:LTE:SIGN<i>:RFSettings:EATTenuation:INPut
Frequency
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
FREQuency
CONFigure:LTE:SIGN<i>:RFSettings:CHANnel:UL
Frequency offset
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
FOFFset
CONFigure:LTE:SIGN<i>:RFSettings:FOFFset:UL
Expected nominal power
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
ENPower
CONFigure:LTE:SIGN<i>:RFSettings:ENPMode
CONFigure:LTE:SIGN<i>:RFSettings:ENPower
User margin
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
UMARgin
CONFigure:LTE:SIGN<i>:RFSettings:UMARgin
Mixer level offset
CONFigure:
​
GPRF:
​
MEAS<i>:
​
RFSettings:
​
MLOFfset
CONFigure:LTE:SIGN<i>:RFSettings:MLOFfset
Mapping for spectrum analyzer settings
Setting
Commands for SA scenario
Commands for CSP scenario with LTE signaling
Center frequency
CONFigure:
​
GPRF:
​
MEAS<i>:
​
SPECtrum:
​
FREQuency:
​
CENTer
CONFigure:LTE:SIGN<i>:RFSettings:CHANnel:UL
Span mode
CONFigure:
​
GPRF:
​
MEAS<i>:
​
SPECtrum:
​
FREQuency:
​
SPAN:
​
MODE
Fixed value 
ZSPan
Top