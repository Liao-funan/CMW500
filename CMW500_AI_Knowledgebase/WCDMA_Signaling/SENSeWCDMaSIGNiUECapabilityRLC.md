# SENSeWCDMaSIGNiUECapabilityRLC

Module: WCDMA Signaling
Source: d2227f8bb77c410a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:RLC?
SENSe:WCDMa:SIGN<i>:UECapability:RLC? 
Returns UE capability information indicating in which way the UE supports the radio link control acknowledged mode (RLC AM).
Return values: 
<AMBufferSize>
Maximum total buffer size across all RLC AM entities supported by the UE
Range: 
10  to  1000
<MaxRLCWindow>
Maximum RLC window size supported by the UE
Range: 
0  to  4095
<AMEntities>
Maximum number of AM entities supported by the UE
Range: 
3  to  30
<TwoLogicalCh>
NO |
 
 YES
Support of AM entity configurated with two logical channels
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <TwoLogicalCh>
Manual operation: 
See 
"RLC"
Top