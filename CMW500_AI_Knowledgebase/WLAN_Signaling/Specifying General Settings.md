# Specifying General Settings

Module: WLAN Signaling
Source: 098c9b5511f44455.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Specifying General Settings
Specifying General Settings
Each scenario is activated via a different 
ROUTe
 command. Use the "standalone scenario" section or the "MIMO scenario" section.
Standalone scenario
// *****************************************************************************
// Select the standalone scenario, the signaling unit and the RF path.
// Specify the external attenuation. Select the operation mode.
// *****************************************************************************
ROUTe:WLAN:SIGN:SCENario:SCELl:FLEXible SUU1,RF1C,RX1,RF1C,TX1
CONFigure:WLAN:SIGN:RFSettings:EATTenuation:OUTPut 2
CONFigure:WLAN:SIGN:RFSettings:EATTenuation:INPut 2
CONFigure:WLAN:SIGN:CONNection:OMODe AP
// *****************************************************************************
// Configure the burst power for the generated signal.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:BOPower -30
MIMO scenario
// *****************************************************************************
// Select the MIMO scenario, the signaling unit and the RF paths.
// Specify the external attenuation.
// *****************************************************************************
ROUTe:WLAN:SIGN:SCENario:MIMO:FLEXible SUU1, RF1C, RX1, RF1C, TX1, RF1C, TX3
CONFigure:WLAN:SIGN:RFSettings:CARRier1:EATTenuation:OUTPut 2
CONFigure:WLAN:SIGN:RFSettings:CARRier2:EATTenuation:OUTPut 2
CONFigure:WLAN:SIGN:RFSettings:EATTenuation:INPut 2
// *****************************************************************************
// Select the MIMO mode and configure the cyclic shift diversity.
// *****************************************************************************
CONFigure:WLAN:SIGN:MIMO:TMMode SMULtiplexin
CONFigure:WLAN:SIGN:MIMO:TCSD 0, 0
// *****************************************************************************
// Configure the total burst power of both generated signals and the ratio
// of the two signal powers.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:BOPower -30
CONFigure:WLAN:SIGN:RFSettings:TSRatio 0
Both scenarios
// *****************************************************************************
// Select the standard.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:STANdard NGFStd
// *****************************************************************************
// Configure the expected PEP of the measured signal and the mixer level offset.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:EPEPower -20
CONFigure:WLAN:SIGN:RFSettings:MLOFfset 1
// *****************************************************************************
// Configure the advanced RF settings.
// *****************************************************************************
CONFigure:WLAN:SIGN:RFSettings:ADVanced:TX:IQSWap OFF
CONFigure:WLAN:SIGN:RFSettings:ADVanced:RX:IQSWap OFF
CONFigure:WLAN:SIGN:RFSettings:ADVanced:TX:SET OFF
CONFigure:WLAN:SIGN:RFSettings:ADVanced:RX:SET OFF
Top