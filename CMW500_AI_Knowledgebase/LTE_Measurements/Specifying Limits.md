# Specifying Limits

Module: LTE Measurements
Source: cfada20c21db4d25.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Programming
 > 
Specifying Limits
Specifying Limits
// *****************************************************************************
// Define modulation limits.
// ***************************************************************************** 
CONFigure:LTE:MEAS:PRACh:LIMit:EVMagnitude 20, 40
CONFigure:LTE:MEAS:PRACh:LIMit:MERRor 20, OFF
CONFigure:LTE:MEAS:PRACh:LIMit:PERRor 20, OFF
CONFigure:LTE:MEAS:PRACh:LIMit:FERRor 150
// *****************************************************************************
// Define power dynamics limits.
// ***************************************************************************** 
CONFigure:LTE:MEAS:PRACh:LIMit:PDYNamics ON,6.8,-8.8,-48.8
Top