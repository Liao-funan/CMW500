# Specifying Limits (DSSS)

Module: WLAN Measurements
Source: 67bc1eae3c784115.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Limits (DSSS)
Specifying Limits (DSSS)
// *****************************************************************************
// Define Power vs. Time limits for DSSS signals.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIMit:PVTime:REDGe:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:PVTime:REDGe 2.1E-6
CONFigure:WLAN:MEAS:MEValuation:LIMit:PVTime:FEDGe:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:PVTime:FEDGe 2.1E-6
// *****************************************************************************
// Define modulation limits for DSSS signals.
// ***************************************************************************** 
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:DSSS:EVMPeak 30
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:DSSS:EVMRms 25
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:DSSS:IQOFfset -16
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:DSSS:CFERror 50000
CONFigure:WLAN:MEAS:MEValuation:LIMit:MODulation:DSSS:CCERror 21
 
// *****************************************************************************
// Define transmission spectrum mask for DSSS signals.
// *****************************************************************************  
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:DSSS:ENABle ON
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:DSSS:Y:AB -49
CONFigure:WLAN:MEAS:MEValuation:LIMit:TSMask:DSSS:Y:CD -29
Top