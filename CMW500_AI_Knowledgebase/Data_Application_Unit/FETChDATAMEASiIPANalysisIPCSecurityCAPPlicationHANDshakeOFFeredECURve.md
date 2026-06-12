# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationHANDshakeOFFeredECURve

Module: Data Application Unit
Source: 887a5634a4164f3e.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
SSL/TLS Handshake Information
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:ECURve?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:HANDshake:OFFered:ECURve? 
<FlowID>
Queries information about the elliptic curves offered during the handshake for a specific connection.
After the reliability indicator, two results are returned for each elliptic curve:
<Reliability>, {<EllipticCurveID>, <EllipticCurveName>}
Curve 1
, {...}
Curve 2
, ...
Query parameters: 
<FlowID>
Selects the connection for which information is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<EllipticCurveID>
Elliptic curve ID as hexadecimal value
<EllipticCurveName>
Elliptic curve name as string
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
"Elliptic Curves, Elliptic Curve Point Formats, Elliptic Curve Type"
Top