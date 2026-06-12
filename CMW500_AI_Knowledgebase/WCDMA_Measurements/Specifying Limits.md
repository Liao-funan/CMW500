# Specifying Limits

Module: WCDMA Measurements
Source: d9409c98a46c429d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Programming
 > 
Measurements with Combined Signal  Path Scenario
 > 
Specifying Limits
Specifying Limits
// *****************************************************************************
// Configure UE power limits for "Max. Power E-DCH" measurements.
// ***************************************************************************** 
CONFigure:WCDMa:MEAS:TPC:LIMit:MPEDch ON, 24, 1.7, -6.7
// *****************************************************************************
// Configure power step limit for "Change of TFC" measurements.
// ***************************************************************************** 
CONFigure:WCDMa:MEAS:TPC:LIMit:CTFC 2.2, ON, 7
// *****************************************************************************
// Configure power step limit for "Power Control in UL CM" measurements,
// CM test type pattern A and B.
// ***************************************************************************** 
CONFigure:WCDMa:MEAS:TPC:LIMit:ULCM:PA 5 1 5
CONFigure:WCDMa:MEAS:TPC:LIMit:ULCM:PB 3 2
// *****************************************************************************
// Set the limit for dual carrier HSPA in-band emission.
// ***************************************************************************** 
CONFigure:WCDMa:MEAS:TPC:LIMit:DHIB -22
Top