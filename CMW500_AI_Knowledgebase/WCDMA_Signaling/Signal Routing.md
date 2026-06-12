# Signal Routing

Module: WCDMA Signaling
Source: 88cd9df589c7483c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Routing
Signal Routing
The following commands configure the scenario, select the paths for the generated downlink signal (output) and the analyzed signal (input), define external attenuation values and time delay compensation.
List of Commands
ROUTe:WCDMa:SIGN<i>?
ROUTe:WCDMa:SIGN<i>:SCENario?
ROUTe:WCDMa:SIGN<i>:SCENario:SCELl
ROUTe:WCDMa:SIGN<i>:SCENario:SCFading:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:SCFading[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCARrier
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCHSpa
ROUTe:WCDMa:SIGN<i>:SCENario:TCHSpa
ROUTe:WCDMa:SIGN<i>:SCENario:SCELl:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:SCFading:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:SCFading:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:SCFDiversity:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCARrier:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DCFading:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DCFDiversity:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFading:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:FLEXible:INTernal
ROUTe:WCDMa:SIGN<i>:SCENario:DBFDiversity:FLEXible[:EXTernal]
ROUTe:WCDMa:SIGN<i>:SCENario:DCHSpa:FLEXible
ROUTe:WCDMa:SIGN<i>:SCENario:TCHSpa:FLEXible
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EATTenuation:OUTPut
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EATTenuation:INPut
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EDC:INPut
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:EDC:OUTPut
Top