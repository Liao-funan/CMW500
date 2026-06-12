# Specifying List Mode Settings

Module: LTE Measurements
Source: ba6aa6d651c64925.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
Using LTE List Mode
 > 
Specifying List Mode Settings
Specifying List Mode Settings
// *****************************************************************************
// Define 2 segments with a length of 10 subframes each (1 radio frame), 
// different expected nominal power and identical remaining settings.
// *****************************************************************************
CONF:LTE:MEAS:MEV:LIST:SEGM1:SET 10,1,FDD,OB1,2E+9,B100,NORM,AUTO,OFF,0,NS04
CONF:LTE:MEAS:MEV:LIST:SEGM2:SET 10,-19,FDD,OB1,2E+9,B100,NORM,AUTO,OFF,0,NS04
// *****************************************************************************
// Select eMTC narrowband. Define automatic RB allocation detection.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:EMTC:NBANd 2
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:EMTC:NBANd 2
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:RBALlocation ON, KEEP, KEEP
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:RBALlocation ON, KEEP, KEEP
// *****************************************************************************
// Define an SCC with lower bandwidth, located above the PCC and adjust the
// SCC frequency automatically.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:SCC 3E+9,B050
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:SCC 3E+9,B050
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:CAGGregation:ACSPacing
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:CAGGregation:ACSPacing
// *****************************************************************************
// For single-carrier measurements, measure the PCC, not the SCC.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:CAGGregation:MCARrier PCC
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:CAGGregation:MCARrier PCC
// *****************************************************************************
// Enable modulation results except phase error for both segments. Use
// a statistical length of 10 slots and select automatic detection of the 
// modulation scheme.
// *****************************************************************************
CONF:LTE:MEAS:MEValuation:LIST:SEGMent1:MODulation 10,ON,ON,ON,OFF,ON,ON,AUTO
CONF:LTE:MEAS:MEValuation:LIST:SEGMent2:MODulation 10,ON,ON,ON,OFF,ON,ON,AUTO
// *****************************************************************************
// Enable all spectrum emission results for segment 2.
// Enable the E-UTRA ACLR results for segment 2 (no UTRA results).
// Use a statistical length of 10 slots.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:SEMask 10,ON,ON,ON
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:ACLR 10,ON,OFF,OFF,ON
// *****************************************************************************
// Enable power results for segment 1 and 2.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:PMONitor ON
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:PMONitor ON
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:POWer 5,ON
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:POWer 5,ON
// *****************************************************************************
// Select both segments for measurement and select trigger mode "ONCE".
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:LRANge 1,2
TRIGger:LTE:MEAS:MEValuation:LIST:MODE ONCE
// *****************************************************************************
// Only for measurements with R&S CMWS:
// Configure the RF input connector per segment.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST:CMWS:CMODe LIST
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent1:CMWS:CONNector R11
CONFigure:LTE:MEAS:MEValuation:LIST:SEGMent2:CMWS:CONNector R12
// *****************************************************************************
// Enable the list mode.
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:LIST ON
Top