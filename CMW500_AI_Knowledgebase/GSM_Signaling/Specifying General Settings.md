# Specifying General Settings

Module: GSM Signaling
Source: e964ac48b34044d3.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Specifying General Settings
Specifying General Settings
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define paths for a standard cell with or without external fading,
// with or without RX diversity, including signal routing and external
// attenuation. ROUTe commands also activate the scenario. 
// Send only one of the scenario commands.
// *****************************************************************************
ROUTe:GSM:SIGN:SCENario:SCELl:FLEXible SUU1,RF2C,RX1,RF2C,TX1
ROUTe:GSM:SIGN:SCENario:SCFading:FLEXible SUU1,RF2C,RX1,RF2C,TX1,IQ2O
ROUTe:GSM:SIGN:SCEN:SCFD:FLEXible:INTernal SUU1,RF1C,RX1,RF1C,TX1,RF3C,TX2,FAD1
ROUTe:GSM:SIGN:SCEN:SCFD:FLEXible SUU1,RF1C,RX1,RF1C,TX1,RF3C,TX2,IQ2O,IQ4O
CONFigure:GSM:SIGN:RFSettings:EATTenuation:INPut 2
CONFigure:GSM:SIGN:RFSettings:EATTenuation:OUTPut 2
// *****************************************************************************
// Define time delay to be compensated in output and input paths.
// *****************************************************************************
CONFigure:GSM:SIGN:RFSettings:EDC:INPut 5E-9
CONFigure:GSM:SIGN:RFSettings:EDC:OUTPut 5E-9
// *****************************************************************************
// Define input and output paths for the "BCCH and TCH/PDCH" scenario.
// *****************************************************************************
ROUTe:GSM:SIGN:SCENario:BATCh:FLEXible SUU1,RF1C,RX1,RF1C,TX1,RF3C,TX2
CONFigure:GSM:SIGN:RFSettings:EATTenuation:INPut 2
CONFigure:GSM:SIGN:RFSettings:EATTenuation:OUTPut1 2
CONFigure:GSM:SIGN:RFSettings:EATTenuation:BCCH:OUTPut 2
// *****************************************************************************
// Set frequency offset in DL and UL.
// *****************************************************************************
CONFigure:GSM:SIGN:RFSettings:FOFFset:DL 10000
CONFigure:GSM:SIGN:RFSettings:FOFFset:UL -10000
// *****************************************************************************
// Statically configure the expected uplink power:
// - choose manual expected nominal power mode
// - set the expected nominal power to 23 dBm and apply a margin of 7 dB 
// - set the mixer level offset to -7 dB
// *****************************************************************************
CONFigure:GSM:SIGN:RFSettings:ENPMode MANual
CONFigure:GSM:SIGN:RFSettings:ENPower 23
CONFigure:GSM:SIGN:RFSettings:UMARgin 7
CONFigure:GSM:SIGN:RFSettings:MLOFfset -7
Top