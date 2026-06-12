# Initialization and Basic Configuration

Module: Bluetooth Signaling
Source: f1c99177266f4016.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Initialization and Basic Configuration
Initialization and Basic Configuration
// *****************************************************************************
// Reset the CMW settings and clear the error queue
// *****************************************************************************
*RST; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Set operating mode to connection test.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:OPMode CNT; *OPC?
// *****************************************************************************
// Configure routing and external attenuation
// *****************************************************************************
ROUTe:BLUetooth:SIGN:SCENario:OTRX RF2C,RX1,RF2C,TX1; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:EATTenuation:OUTPut 4; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:EATTenuation:INPut 4; *OPC?
// *****************************************************************************
// Alternativelly configure routing using SUA
// *****************************************************************************
ROUTe:BLUetooth:SIGN:SCENario:OTRX:FLEXible SUA1,RF2C,RX1,RF2C,TX1; *OPC?
// *****************************************************************************
// Disable auto ranging, specify the expected nominal 
// power (RX level), TX power level and user margin.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:RFSettings:ARANging OFF; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:ENPower 7; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:LEVel -50; *OPC?
CONFigure:BLUetooth:SIGN:RFSettings:UMARgin 1; *OPC?
// *****************************************************************************
// Specify the CMW BD address
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:BDADdress:CMW #H123456123456; *OPC?
// *****************************************************************************
// Specify the burst type and activate enhanced power control.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:BTYPe EDR; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PCONtrol:EPCMode AUTO; *OPC?
Top