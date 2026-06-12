# Signal Routing

Module: GSM Signaling
Source: 742cf0b0869d4186.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
Signal Routing
The following commands configure the scenario, select the paths for the generated BS signal (output) and the analyzed signal (input), define external attenuation and external delay compensation values.
List of Commands
ROUTe:GSM:SIGN<i>:SCENario:BATCh:FLEXible
ROUTe:GSM:SIGN<i>:SCENario:IORI:FLEXible
ROUTe:GSM:SIGN<i>:SCENario:SCELl:FLEXible
ROUTe:GSM:SIGN<i>:SCENario:SCFading:FLEXible:INTernal
ROUTe:GSM:SIGN<i>:SCENario:SCFading:FLEXible[:EXTernal]
ROUTe:GSM:SIGN<i>:SCENario:SCFDiversity:FLEXible:INTernal
ROUTe:GSM:SIGN<i>:SCENario:SCFDiversity:FLEXible[:EXTernal]
ROUTe:GSM:SIGN<i>:SCENario?
ROUTe:GSM:SIGN<i>?
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:INPut
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:OUTPut<n>
CONFigure:GSM:SIGN<i>:RFSettings:EATTenuation:BCCH:OUTPut
CONFigure:GSM:SIGN<i>:RFSettings:EDC:INPut
CONFigure:GSM:SIGN<i>:RFSettings:EDC:OUTPut
Top