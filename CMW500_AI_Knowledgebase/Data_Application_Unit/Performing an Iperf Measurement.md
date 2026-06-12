# Performing an Iperf Measurement

Module: Data Application Unit
Source: eac4b76a83644165.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing an Iperf Measurement
Performing an Iperf Measurement
The following SCPI commands are related to the iperf tool at the DAU side of the connection. In parallel, you must configure the iperf tool installed
at the DUT side and start the measurement also there.
The DUT side also provides measurement results.
// *****************************************************************************
// Specify the test duration, the iperf version and the packet size.
// *****************************************************************************
CONFigure:DATA:MEAS:IPERf:TDURation 60
CONFigure:DATA:MEAS:IPERf:TYPE IPERf
CONFigure:DATA:MEAS:IPERf:PSIZe 1500
// *****************************************************************************
// Enable server instance 1 and select protocol type, port number and
// window size for this server instance.
// *****************************************************************************
CONFigure:DATA:MEAS:IPERf:SERVer1:ENABle ON
CONFigure:DATA:MEAS:IPERf:SERVer1:PROTocol TCP
CONFigure:DATA:MEAS:IPERf:SERVer1:PORT 5001
CONFigure:DATA:MEAS:IPERf:SERVer1:WSIZe 64
// *****************************************************************************
// Enable client instance 1 and configure the client instance:
// Select protocol type, port number, DUT IP address, window size,
// parallel connections and maximum UDP bit rate. 
// *****************************************************************************
CONFigure:DATA:MEAS:IPERf:CLIent1:ENABle ON
CONFigure:DATA:MEAS:IPERf:CLIent1:PROTocol TCP
CONFigure:DATA:MEAS:IPERf:CLIent1:PORT 5003
CONFigure:DATA:MEAS:IPERf:CLIent1:IPADdress '172.22.1.110'
CONFigure:DATA:MEAS:IPERf:CLIent1:WSIZe 64
CONFigure:DATA:MEAS:IPERf:CLIent1:PCONnection 2
CONFigure:DATA:MEAS:IPERf:CLIent1:BITRate 2E+6
// *****************************************************************************
// Start the measurement at the DAU side (also start the DUT side now).
// *****************************************************************************
INIT:DATA:MEAS:IPERf
// *****************************************************************************
// Implement a loop and insert one of the following commands into the loop
// to query/monitor the results. Iperf delivers new results once per second.
// The first two commands query only a subset of results. The third command
// queries all results.
// *****************************************************************************
FETCh:DATA:MEAS:IPERf:SERVer?
FETCh:DATA:MEAS:IPERf:CLIent?
FETCh:DATA:MEAS:IPERf:ALL?
Top