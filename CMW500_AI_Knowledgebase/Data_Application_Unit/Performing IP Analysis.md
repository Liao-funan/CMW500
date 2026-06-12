# Performing IP Analysis

Module: Data Application Unit
Source: bf04b76780274410.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing IP Analysis
Performing IP Analysis
// *****************************************************************************
// Enable analysis of all results
// *****************************************************************************
CONF:DATA:MEAS:IPANalysis:RESult:ALL ON,ON,ON,ON,ON
// *****************************************************************************
// Configure the OK/NOK thresholds for the "TCP Analysis" results.
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:TCPanalysis:TWSThreshold 80
CONFigure:DATA:MEAS:IPANalysis:TCPanalysis:TRTHreshold 9
CONFigure:DATA:MEAS:IPANalysis:TCPanalysis:TOTHreshold 40
CONFigure:DATA:MEAS:IPANalysis:TCPanalysis:RTTThreshold 40
// *****************************************************************************
// Start the IP Analysis application.
// *****************************************************************************
INIT:DATA:MEAS:IPANalysis
// *****************************************************************************
// Query the "TCP Analysis" results:
//     threshold check results for connection number 3
//     threshold check results for all connections
//     details for connection number 3
//  traces for connection number 3
// *****************************************************************************
SENSe:DATA:MEAS:IPANalysis:TCPanalysis:FLOWid? 3
FETCh:DATA:MEAS:IPANalysis:TCPanalysis:ALL?
SENSe:DATA:MEAS:IPANalysis:TCPanalysis:DETails? 3
FETCh:DATA:MEAS:IPANalysis:TCPanalysis:THRoughput:TRACe? 3
FETCh:DATA:MEAS:IPANalysis:TCPanalysis:RTT:TRACe? 3
FETCh:DATA:MEAS:IPANalysis:TCPanalysis:WSIZe:TRACe? 3
FETCh:DATA:MEAS:IPANalysis:TCPanalysis:RETRansmiss:TRACe? 3
// *****************************************************************************
// Configure filter: only open connections, only L4 protocol TCP,
// only destination ports from 16 to 29 but not 21
// *****************************************************************************
CONF:DATA:MEAS:IPAN:FILTer:CONNections OPEN
CONF:DATA:MEAS:IPAN:IPC:FILT:EXT ON,L4PR,"TCP",ON,DSTP,">15, !21, <30"
// *****************************************************************************
// Query the "IP Connectivity" results:
//     overall statistical connection information
//     connection-specific results for all connections
//     connection-specific results for connection number 3
// *****************************************************************************
SENSe:DATA:MEAS:IPANalysis:IPConnect:STATistics?
SENSe:DATA:MEAS:IPANalysis:IPConnect:FLOWid? 3
SENSe:DATA:MEAS:IPANalysis:IPConnect:AFLowid? 3
FETCh:DATA:MEAS:IPANalysis:IPConnect:ALL?
// *****************************************************************************
// Query the "Data Pie Charts" results:
//     data per connection
//     data per protocol
//     data per layer
//
// Query the data per application results of the application layer.
// Navigate to the next lower layer for the IMS application.
// Query the data per application results of layer 7 (for the IMS application).
// *****************************************************************************
FETCh:DATA:MEAS:IPANalysis:DPCP:DPConnection?
FETCh:DATA:MEAS:IPANalysis:DPCP:DPPRotocol?
FETCh:DATA:MEAS:IPANalysis:DPCP:DPLayer? APP
FETCh:DATA:MEAS:IPANalysis:DPCP:DPAPplic?
CONFigure:DATA:MEAS:IPANalysis:DPCP:DPAPplic:APP 'IMS'
FETCh:DATA:MEAS:IPANalysis:DPCP:DPAPplic?
// *****************************************************************************
// Assign connection number 3 to the throughput trace number 3.
// Query the "Flow Throughput and Event Trigger" results:
//     throughput trace number 3
//     "open" events trace
//     "close" events trace
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:FTTRigger:TRACe3:TFLowid 3
FETCh:DATA:MEAS:IPANalysis:FTTRigger:TRACes3:FTHRoughput?
FETCh:DATA:MEAS:IPANalysis:FTTRigger:TRIGger:STARt?
FETCh:DATA:MEAS:IPANalysis:FTTRigger:TRIGger:END?
// *****************************************************************************
// Query the "Voice Over IMS" results:
//     information at call level
//     information at flow level
//     measured DTX and PER
//     measured jitter
//     measured bitrates / codec mode requests
// *****************************************************************************
FETCh:DATA:MEAS:IPANalysis:VOIMs:ALL?
SENSe:DATA:MEAS:IPANalysis:VOIMs:FLOWs? 34, 36, DL, VIDeo
SENSe:DATA:MEAS:IPANalysis:VOIMs:PERDtx? 132
SENSe:DATA:MEAS:IPANalysis:VOIMs:JITTer? 132
SENSe:DATA:MEAS:IPANalysis:VOIMs:BITRate:CMR? 34, 36, DL
// *****************************************************************************
// Store the IP analysis result database to a file
// *****************************************************************************
CONFigure:DATA:MEAS:IPANalysis:EXPortdb
Top