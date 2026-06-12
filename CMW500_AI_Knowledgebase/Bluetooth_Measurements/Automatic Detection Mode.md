# Automatic Detection Mode

Module: Bluetooth Measurements
Source: 6a9f17b0b9794907.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Automatic Detection Mode
Automatic Detection Mode
// *******************************************************************************
// Activate automatic detection mode 
// Define the basic input signal settings for BR/EDR: Burst Type (BR), BD Address  
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:DMODe AUTO
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe BR
CONFigure:BLUetooth:MEAS:ISIGnal:LAP #H121212
CONFigure:BLUetooth:MEAS:ISIGnal:UAP #H34
CONFigure:BLUetooth:MEAS:ISIGnal:NAP #H5656
CONFigure:BLUetooth:MEAS:ISIGnal:BDADdress?
// *******************************************************************************
// Start a measurement and read the modulation results. 
// Read the auto-detected signal properties and the yield.
// *******************************************************************************
READ:BLUetooth:MEAS:MEValuation:MODulation:BRATe:CURRent?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PTYPe:BRATe?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PATTern:BRATe?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PLENgth:BRATe?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:NOSLots:BRATe?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:BRATe:YIELd?
// *******************************************************************************
// Change the signal configuration and R&S CMW settings for EDR packets with the 
// BD Address defined above. Start a measurement, read the auto-detected signal 
// properties
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe EDR
READ:BLUetooth:MEAS:MEValuation:MODulation:EDRATe:CURRent?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PTYPe:EDRate?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PLENgth:EDRate?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:NOSLots:EDRate?
// *******************************************************************************
// Change the signal configuration and R&S CMW settings for LE packets. 
// Start an LE 1M measurement, read the auto-detected signal properties
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LE1M
READ:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE1M:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE1M:YIELd?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PTYPe:LENergy
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:AADDress:LENergy:LE1M?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PATTern:LENergy:LE1M?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PLENgth:LENergy:LE1M?
// *******************************************************************************
// Change the signal configuration and R&S CMW settings for LE packets. 
// Start a LE 2M PHY measurement, read the auto-detected signal
// properties.
// *******************************************************************************
CONFigure:BLUetooth:MEAS:ISIGnal:BTYPe LE
CONFigure:BLUetooth:MEAS:ISIGnal:LENergy:PHY LE2M
READ:BLUetooth:MEAS:MEValuation:MODulation:LENergy:LE2M:AVERage?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PTYPe:LENergy:LRANge?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PATTern:LENergy:LE2M?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:PLENgth:LENergy:LE2M?
FETCh:BLUetooth:MEAS:ISIGnal:ADETected:CODing:LENergy:LE2M?
Top