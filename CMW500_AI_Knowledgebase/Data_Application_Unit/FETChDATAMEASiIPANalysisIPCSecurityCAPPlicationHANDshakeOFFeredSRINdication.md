# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredSRINdication

Module: Data Application Unit
Source: 6f96e8206cb54720.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:SRINdication?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:SRINdication? 
<FlowID>
Queries information about the server that the client wants to contact, as sent by the client during the handshake for a specific connection.
After the reliability indicator, three results are returned for each entry:
<Reliability>, {<ServerID>, <ServerName>, <ServerType>}
1
, {...}
2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ServerID>
Server ID as hexadecimal value
<ServerName>
Server name indication (SNI) as string
<ServerType>
Type of the server name as string
Example: 
See 
"Performing IP Security Tests"
Usage: 
Query only
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM052
Manual operation: 
See 
"Server Name Indication, Server Type Indication"
Top