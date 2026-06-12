# Configuring  Measurement-Specific Settings

Module: WCDMA Measurements
Source: ba404da4c8d84384.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Programming
 > 
Measurements with Standalone Scenario
 > 
Configuring  Measurement-Specific Settings
Configuring Measurement-Specific Settings
// *****************************************************************************
// Define the error handling.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:MOEXception ON
CONFigure:WCDMa:MEAS:TPC:TOUT 1800
 
// *****************************************************************************
// Select the TPC setup  test step EF and query the measurement mode.
// Set the measurement length for the monitor mode, 
// and query it for the inner loop power control mode.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:SETup TSEF
CONFigure:WCDMa:MEAS:TPC:MODE?
CONFigure:WCDMa:MEAS:TPC:MONitor:MLENgth 300
CONFigure:WCDMa:MEAS:TPC:ILPControl:MLENgth?
// *****************************************************************************
// Configure the inner loop power control mode:
// Switch off automatic TPC setup execution, configure the test steps E to H, 
// enable segmentation.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:ILPControl:AEXecution OFF
CONFigure:WCDMa:MEAS:TPC:ILPControl:TSEF 130, 20
CONFigure:WCDMa:MEAS:TPC:ILPControl:TSGH 90, 20
CONFigure:WCDMa:MEAS:TPC:ILPControl:TSSegment ON
// *****************************************************************************
// Alternatively configure TPC setup UL CM and select its pattern.
// Query measurement length and switch on automatic TPC setup execution.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:SETup ULCM
CONFigure:WCDMa:MEAS:TPC:MODE?
CONFigure:WCDMa:MEAS:UESignal:CMPattern AR
CONFigure:WCDMa:MEAS:TPC:ULCM:MLENgth?
CONFigure:WCDMa:MEAS:TPC:ULCM:AEXecution ON
// *****************************************************************************
// Alternatively configure TPC setup DC HSPA in-band emission and query 
// the measurement mode. Set the measurement length, pattern and switch on 
// automatic TPC setup execution.
// *****************************************************************************
CONFigure:WCDMa:MEAS:TPC:SETup DHIB
CONFigure:WCDMa:MEAS:TPC:MODE?
CONFigure:WCDMa:MEAS:TPC:DHIB:PATTern UD
CONFigure:WCDMa:MEAS:TPC:DHIB:MLENgth 20
CONFigure:WCDMa:MEAS:TPC:DHIB:AEXecution ON
Top