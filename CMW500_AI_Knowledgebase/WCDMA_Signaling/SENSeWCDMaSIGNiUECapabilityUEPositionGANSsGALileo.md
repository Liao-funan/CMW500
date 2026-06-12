# SENSeWCDMaSIGNiUECapabilityUEPositionGANSsGALileo

Module: WCDMA Signaling
Source: 63d2c2d059b64c86.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:GALileo?
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:GALileo? 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:GLONass? 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:MGPS? 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:QZSS? 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition:GANSs:SBAS? 
Returns UE capability information related to the navigation standards indicated by the last mnemonic: Galileo, global navigation satellite system (GLONASS), modernized global positioning system (GPS), quasi-zenith satellite system (QZSS), satellite-based augmentation system (SBAS)
Return values: 
<Supported>
NO |
 
 YES
Indicates if a UE supports the navigation standard indicated by the last mnemonic
<Mode>
NONE |
 
 NETWork |
 
 UE |
 
 NUE
Indicates if a UE supports the "network-based" and/or "UE-based" navigation standard indicated by the last mnemonic
<SignalID>
The GANSS signal ID encodes the identification of the signal for each GANSS. It depends on the GANSS ID as specified in 3GPP TS 25.331, section 10.3.3.45a.
<SignalIDsExt>
GANSS signal IDs extension specifies the UE capability to measure on more than one GANSS signal and which signals are supported (see 3GPP TS 25.331, section 10.3.3.45, note 2).
<TimingCellFrms>
NO |
 
 YES
Support of GANSS timing of cell frames measurement
<CarrierPhase>
NO |
 
 YES
Support of GANSS carrier-phase measurement
<NonNativeAssist>
NO |
 
 YES
Support of non-native assistance choices
<SbasID>
Coding is specified in 3GPP TS 25.331, section 10.3.3.45, note 1.
This parameter is only available for SBAS standard.
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Top