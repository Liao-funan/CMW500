# FETChDATAMEASiIPANalysisIPCSecurityCAPPlicationALL

Module: Data Application Unit
Source: 55fe0fade9774cb0.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
IP Connection Security, General Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:ALL?
FETCh:DATA:MEAS<i>:IPANalysis:IPCSecurity:CAPPlication:ALL? 
Queries information about all connections of all applications.
The results after the reliability indicator are returned per connection:
<Reliability>, {<Application>, <Flowid>, ..., <HandSkAvailable>, <CertifAvailable>}
1
, {...}
2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Application>
Application name as string
<Flowid>
ID of the flow used by the connection
<SourceIP>
IP address of the DUT as string
<LocalPort>
Port number used at the DUT side
<Destination IP>
Destination IP address as string
<Destination Port>
Port number of the destination
<FQDN>
Fully qualified domain name of the destination as string
<RAN>
Used radio access network as string
<APN>
Access point name as string
<Protocol>
Used protocol, for example SSL or HTTP, as string
<CountryCode>
Country of the destination as string (two-letter country code)
<Location>
City of the destination, as string
<Latitude>
Latitude of the destination, as string
<Longitude>
Longitude of the destination, as string
<ULData>
Layer 3 UL data exchanged via the connection
Default unit: 
bytes
<ULPKT>
Number of UL packets exchanged via the connection
<DLData>
Layer 3 DL data exchanged via the connection
Default unit: 
bytes
<DLPKT>
Number of DL packets exchanged via the connection
<HandSkAvailable>
OFF |
 
 ON
Handshake information available for the connection or not
<CertifAvailable>
OFF |
 
 ON
Certificate information available for the connection or not
Usage: 
Query only
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KM052
Manual operation: 
See 
"Connection Group area"
Top