# Performing a Ping Measurement

Module: Data Application Unit
Source: 18f959fb63d24268.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing a Ping Measurement
Performing a Ping Measurement
// *****************************************************************************
// Configure the measurement:
// Specify destination IP address, interval between two requests, timeout,
// payload size and ping count.
// *****************************************************************************
CONFigure:DATA:MEAS:PING:DIPaddress '172.22.1.110'
CONFigure:DATA:MEAS:PING:INTerval 0.5
CONFigure:DATA:MEAS:PING:TIMeout 3
CONFigure:DATA:MEAS:PING:PSIZe 50
CONFigure:DATA:MEAS:PING:PCOunt 10
// *****************************************************************************
// Start the measurement.
// *****************************************************************************
INIT:DATA:MEAS:PING
// *****************************************************************************
// Wait until the measurement is complete ("RDY").
// *****************************************************************************
WHILE FETCh:DATA:MEAS:PING:STATe? <> 'RDY'
// *****************************************************************************
// Query all results.
// *****************************************************************************
FETCh:DATA:MEAS:PING?
FETCh:DATA:MEAS:PING:OVERall?
FETCh:DATA:MEAS:PING:NRCount?
Top