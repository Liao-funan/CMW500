# CONFigureWCDMaSIGNiRFSettingsCARRiercAWGN

Module: WCDMA Signaling
Source: 29e0469383f3403a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:AWGN
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:AWGN 
<Enable>[, <Level>]
Enables or disables AWGN insertion via the signaling unit and sets the total AWGN level within the channel bandwidth.
For multi-carrier, the same settings are applied to all carriers. Thus it is sufficient to configure one carrier.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Enable>
OFF |
 
 ON
Enables or disables the AWGN signal
*RST:
OFF
<Level>
The range of the AWGN level can be calculated as follows from the range of the output power stated below:
Min (AWGN) = Min (Output Power) - External Attenuation
Max (AWGN) = Max (Output Power) - External Attenuation - Base Level
Range: 
-130 dBm to 0 dBm (RFx COM) or -120 dBm to 13 dBm (RFx OUT); please also notice the ranges quoted in the data sheet
*RST:
-70 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS410
Manual operation: 
See 
"AWGN Noise (Ioc)"
Top