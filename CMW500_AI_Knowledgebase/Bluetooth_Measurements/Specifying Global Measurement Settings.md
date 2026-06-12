# Specifying Global Measurement Settings

Module: Bluetooth Measurements
Source: 08f47079493f4d4a.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Using Bluetooth List Mode
 > 
Specifying Global Measurement Settings
Specifying Global Measurement Settings
// *****************************************************************************
// Reset
// *****************************************************************************
SYSTem:RESet 'Bluetooth Meas1'; *OPC?
*CLS; *OPC?
// *****************************************************************************
// Define signal routing and external attenuation
// *****************************************************************************
ROUTe:BLUetooth:MEAS:SCENario:SALone RF1C, RX1
CONFigure:BLUetooth:MEAS:RFSettings:EATTenuation 2
// *****************************************************************************
// Specify the transmitted BD address.
// *************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BDADdress #H565634121212
Top