# Specifying General Measurement Settings

Module: Bluetooth Measurements
Source: 870e15049b014fdd.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Specifying General Measurement Settings
Specifying General Measurement Settings
// *************************************************************************
// System-Reset
// *************************************************************************
*RST;*OPC?
*CLS; *OPC?
 
// *******************************************************************************
// Define a measurement timeout of 1 s.
// Define signal routing, configure RF and analyzer settings for a Bluetooth
// signal with a nominal power of 0 dBm and low operating frequency.
// Alternatively select combined signal path and let Bluetooth Signaling 
// control RF and analyzer settings. Select channel 78 to be measured in CSP.
// *******************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:TOUT 1
ROUTe:BLUetooth:MEAS:SCENario:SALone RF1C,RX1
CONFigure:BLUetooth:MEAS:RFSettings:EATTenuation 2
CONFigure:BLUetooth:MEAS:RFSettings:ENPower 0
CONFigure:BLUetooth:MEAS:RFSettings:UMARgin 3
CONFigure:BLUetooth:MEAS:RFSettings:FREQuency 2402E+6
ROUTe:BLUetooth:MEAS:SCENario:CSPath 'Bluetooth Sig1'
CONFigure:BLUetooth:MEAS:RFSettings:MMODe SING
CONFigure:BLUetooth:MEAS:RFSettings:MCHannel 78
WAITKEY >Signal routing and analyzer settings completed, press "OK" to continue<
Top