# Setting Up a Data Connection

Module: WCDMA Signaling
Source: 26c819dc76e54158.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
RLC Throughput Tests
 > 
Setting Up a Data Connection
Setting Up a Data Connection
Proceed as follows:
Configure the other settings of the signaling application as desired.
Configure the data application unit (see DAU documentation).
Switch on the cell signal. See for example 
"Switching On the Cell Signal and the UE (Signaling)"
.
Attach the UE.
Initiate a mobile originated call at the UE.
Generate IP traffic, e.g. using the "IPerf" measurement provided by the DAU.
// *****************************************************************************
// Query the IPv4 address and APN used by the UE. 
// ***************************************************************************** 
SENSe:WCDMa:SIGN:UESinfo:UEADdress:IPV4?
SENSe:WCDMa:SIGN:UESinfo:APN?
Top