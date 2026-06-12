# SENSeWCDMaSIGNiUECapabilityPDCP

Module: WCDMA Signaling
Source: f55a496995a14109.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:PDCP?
SENSe:WCDMa:SIGN<i>:UECapability:PDCP? 
Returns UE capability information indicating in which way the UE supports the packet data convergence protocol (PDCP) described in 3GPP TS 25.323
Return values: 
<SRNS>
NO |
 
 YES
Support of lossless SRNS relocation
<RFC2507>
NO |
 
 YES
Support of IP header compression according to RFC 2507
<RFC3095>
NO |
 
 YES
Support of robust header compression according to RFC 3095
<RFC3095CtxReloc>
NO |
 
 YES
Support of context relocation applied to the RFC 3095 header compression protocol
<HeaderComp>
Maximum header compression context size supported by the UE. This parameter is only applicable if the UE supports header compression according to RFC 2507
Range: 
1024  to  131072
<MaxROHC>
Maximum number of header compression context sessions supported by the UE. This parameter is only applicable if the UE supports header compression according to RFC3095.
Range: 
2  to  16384
<ReverseDecomp>
Number of packets that can be reverse decompressed by the decompressor in the UE
Range: 
0  to  65535
<PDUSizeChange>
NO |
 
 YES
Support of lossless DL RLC PDU size change
<RFC3095RSpace>
16384 |
 
 32768 |
 
 65536 |
 
 131072
Support of RFC 3095 relocation space
Default unit: 
byte
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <RFC3095RSpace>
Manual operation: 
See 
"PDCP"
Top