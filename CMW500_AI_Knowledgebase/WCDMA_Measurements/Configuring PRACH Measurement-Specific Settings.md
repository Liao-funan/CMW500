# Configuring PRACH Measurement-Specific Settings

Module: WCDMA Measurements
Source: 6800002fc34c4758.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Programming
 > 
Configuring PRACH Measurement-Specific Settings
Configuring PRACH Measurement-Specific Settings
// *****************************************************************************
// Define the error handling.
// *****************************************************************************
CONFigure:WCDMa:MEAS:PRACh:MOEXception ON
CONFigure:WCDMa:MEAS:PRACh:TOUT 1800
// *****************************************************************************
// Configure number of measured preambles and preselected preamble.
// Enable measurement of off power.
// *****************************************************************************
CONFigure:WCDMa:MEAS:PRACh:MPReamble 5
CONFigure:WCDMa:MEAS:PRACh:PPReamble 1
CONFigure:WCDMa:MEAS:PRACh:OFFPower ON
Top