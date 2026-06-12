# Performing IP Logging

Module: Data Application Unit
Source: e09a283cdd7849f2.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing IP Logging
Performing IP Logging
// *****************************************************************************
// Specify the interface to be monitored, the maximum log file size, the maximum
// number of IP packets and the maximum number of bytes per packet to be logged.
// *****************************************************************************
CONFigure:DATA:MEAS:IPLogging:TYPE UPIP
CONFigure:DATA:MEAS:IPLogging:FSIZe 10E+6
CONFigure:DATA:MEAS:IPLogging:PCOunter 1E+3
CONFigure:DATA:MEAS:IPLogging:PSLength 30E+3
// *****************************************************************************
// Start logging and query the name of the log file. Wait until logging has
// really started (e.g. before initiating actions to be logged).
// *****************************************************************************
INIT:DATA:MEAS:IPLogging
SENSe:DATA:MEAS:IPLogging:FNAMe?
WHILE FETCh:DATA:MEAS:IPLogging:STATe? <> 'RUN'
Top