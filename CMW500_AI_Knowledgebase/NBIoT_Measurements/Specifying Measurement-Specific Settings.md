# Specifying Measurement-Specific Settings

Module: NBIoT Measurements
Source: d0431d51585148de.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Programming
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *****************************************************************************
// Define stop condition (stop on limit failure), statistic counts (20 cycles),
// error handling, number of preambles.
// *****************************************************************************
CONFigure:NIOT:MEAS:PRACh:SCONdition SLFail
CONFigure:NIOT:MEAS:PRACh:SCOunt:MODulation 20
CONFigure:NIOT:MEAS:PRACh:SCOunt:PDYNamics 20
CONFigure:NIOT:MEAS:PRACh:MOEXception ON
CONFigure:NIOT:MEAS:PRACh:TOUT 3600
CONFigure:NIOT:MEAS:PRACh:NOPReambles 10
// *****************************************************************************
// Specify EVM window length for all preamble formats.
// Specify the EVM window position for traces.
// *****************************************************************************
CONFigure:NIOT:MEAS:PRACh:MODulation:EWLength 120, 450
CONFigure:NIOT:MEAS:PRACh:MODulation:EWPosition HIGH
Top