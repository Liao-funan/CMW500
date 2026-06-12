# Specifying List Mode Settings

Module: GSM Measurements
Source: cd04c1aace3842d0.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
GSM List Mode
 > 
Specifying List Mode Settings
Specifying List Mode Settings
// *************************************************************************
// Define two segments and a step length
// of 8 slots (one slot per TDMA frame measured).
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST:SLENgth 8
// *************************************************************************
// Idle frames shall not cause "Signal low" errors
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST:IIFRames ON
// *************************************************************************
// Define length of segments (one 52-multiframe each) and analyzer settings
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent1:SETup 52, 17, 9.04E+8, 14
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent2:SETup 52, 15, 9.05E+8, 15
// *************************************************************************
// Measure power in both segments, modulation and spectrum in segment 2
// Select an averaging length of 52 (all measured slots in the segment)
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST:LRANge 1,2
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent1:PVTime 52, ON, #B10000000
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent2:PVTime 52, ON, #B10000000
CONF:GSM:MEAS:MEValuation:LIST:SEGMent2:MOD 52, ON, ON, ON, ON, #B10000000
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent2:SMODulation 52, ON, #B10000000
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent2:SSWitching 52, ON, #B10000000
// *****************************************************************************
// Only for measurements with R&S CMWS:
// Configure the RF input connector per segment.
// *****************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST:CMWS:CMODe LIST
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent1:CMWS:CONNector R11
CONFigure:GSM:MEAS:MEValuation:LIST:SEGMent2:CMWS:CONNector R12
// *************************************************************************
// Enable the list mode.
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:LIST ON
Top