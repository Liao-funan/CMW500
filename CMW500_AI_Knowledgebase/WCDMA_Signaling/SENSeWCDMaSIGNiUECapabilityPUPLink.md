# SENSeWCDMaSIGNiUECapabilityPUPLink

Module: WCDMA Signaling
Source: 066edfc1d9d94768.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:PUPLink?
SENSe:WCDMa:SIGN<i>:UECapability:PUPLink? 
Returns UE capability information describing the capacity of the UE to process and store uplink channels.
Return values: 
<SimultTranspCh>
Maximum number of uplink transport channels that the UE is capable to process simultaneously, not considering the rate of each transport channel
Range: 
4  to  32
<SimultCCTrCH>
Maximum number of uplink coded composite transport channels (CCTrCH) that the UE is capable to process simultaneously
Range: 
1  to  8
<TTITranspBlock>
Maximum total number of transport blocks transmitted within transmission time intervals (TTI) that start at the same time
Range: 
4  to  512
<NumberOfTFC>
Maximum number of transport format combinations (TFC) in an uplink transport format combination set that the UE can store
Range: 
16  to  1024
<NumberOfTF>
Maximum number of uplink transport formats (TF) that the UE can store, where all transport formats for all uplink transport channels are counted
Range: 
32  to  1024
<TurboDecoding>
NO |
 
 YES
Support of turbo decoding
<TXBitsAll>
Maximum number of bits of all transport blocks being transmitted at an arbitrary time instant. All bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<TXBitsConv>
Maximum number of bits of all transport blocks being transmitted at an arbitrary time instant. Only convolutionally coded bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<TXBitsTurbo>
Maximum number of bits of all transport blocks being transmitted at an arbitrary time instant. Only turbo coded bits are considered.
Range: 
640 bits  to  163840 bits
Default unit: 
bits
<DPDCHBits>
Maximum number of DPDCH bits the UE can transmit in 10 ms. The value applies to UE operation in non-compressed mode (if the value is <9600) or in both compressed and non-compressed mode (if the value is 
≥
9600).
Range: 
600 bits  to  57600 bits
Default unit: 
bits
<DPCCHDTX>
NO |
 
 YES
Support of discontinuous uplink DPCCH transmission
<SlotFormat4>
NO |
 
 YES
Support of DPCCH slot format 4
<CommonEDCH>
NO |
 
 YES
Support of common E-DCH
<EDPCCHPwrBoost>
NO |
 
 YES
Support of E-DPCCH power boosting
<EDPDCHPwrIntrpl>
NO |
 
 YES
Support of E-DPCCH power interpolation
<DTXEnh>
NO |
 
 YES
Support of DTX enhancements
<SrvEDCHCDOp>
NO |
 
 YES
Support of FDD serving E-DCH cell decoupling operation
<RLwoFDPCH>
NO |
 
 YES
Support of FDD radio link without DPCH or F-DPCH
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.2.10: added <DPCCHDTX>, <SlotFormat4>, <CommonEDCH> and <EDPCCHPwrBoost>
V3.5.30: added <EDPDCHPwrIntrpl>
V3.7.20: added <DTXEnh>, <SrvEDCHCDOp>, <RLwoFDPCH>
Manual operation: 
See 
"PHY Uplink"
Top