# Specifying Limits

Module: NBIoT Measurements
Source: a807db50cc8e414c.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Programming
 > 
Specifying Limits
Specifying Limits
// *****************************************************************************
// Define modulation limits.
// ***************************************************************************** 
CONFigure:NIOT:MEAS:PRACh:LIMit:EVMagnitude 20, 40
CONFigure:NIOT:MEAS:PRACh:LIMit:MERRor 20, OFF
CONFigure:NIOT:MEAS:PRACh:LIMit:PERRor 20, OFF
CONFigure:NIOT:MEAS:PRACh:LIMit:FERRor 150
// *****************************************************************************
// Define power dynamics limits.
// ***************************************************************************** 
CONFigure:NIOT:MEAS:PRACh:LIMit:PDYNamics ON, -3.7, -18.5, -48.8
Top