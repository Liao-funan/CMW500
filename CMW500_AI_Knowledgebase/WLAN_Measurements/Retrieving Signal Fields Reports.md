# Retrieving Signal Fields Reports

Module: WLAN Measurements
Source: ca071d2a76c14152.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Retrieving Signal Fields Reports
Retrieving Signal Fields Reports
// *****************************************************************************
// Retrieve the reported values of L-SIG field for legacy signal (NON_HT).
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:LSIG:LENGth?
FETCh:WLAN:MEAS:MEValuation:SINFo:LSIG:PARity?
FETCh:WLAN:MEAS:MEValuation:SINFo:LSIG:RATE?
FETCh:WLAN:MEAS:MEValuation:SINFo:LSIG:REServed?
FETCh:WLAN:MEAS:MEValuation:SINFo:LSIG:TAIL?
// *****************************************************************************
// Retrieve the reported values of HT-SIG field for 802.11n signal.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:AGGRegation?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:CBW?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:FECCoding?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:HTLength?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:MCS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:NESS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:NSOunding?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:REServed?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:SHORtgi?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:SMOothing?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:STBCoding?
FETCh:WLAN:MEAS:MEValuation:SINFo:HTSig:TAIL?
// *****************************************************************************
// Retrieve the reported values of VHT-SIG field for 802.11ac signal.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:BEAMformed?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:BW?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:FECCoding?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:GID?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:LDPC?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:PAID?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:REServed1?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:REServed2?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:SDISambig?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:SGI?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:SMCS?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:STBC?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:SUNSts?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:VHTSig:TXOP?
// *****************************************************************************
// Retrieve the reported values of HE_SU-SIG field for 802.11ax single user MIMO.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:BEAMchange?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:BSSColor?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:BW?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:CODing?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:DCM?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:DOPPler?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:FORMat?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:GILTfsize?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:LDPC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:MCS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:NSTS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:PEDisambig?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:PFECpadding?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:REServed1?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:REServed2?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:SPATialreuse?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:STBC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:TXBF?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:TXOP?
FETCh:WLAN:MEAS:MEValuation:SINFo:HESU:ULDL?
// *****************************************************************************
// Retrieve the reported HE_MU-SIG field for 802.11ax multi user MIMO SIG-A.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:BW?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:DOPPler?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:GILTfsize?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:LDPC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:NLTFsymbols?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:NSBSymbols?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:PEDisambig?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:PFECpadding?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:REServed?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:SBCompress?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:SPATialreuse?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:STBC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:TXOP?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEMU:ULDL?
// *****************************************************************************
// Retrieve the reported HE_MU-SIG field for 802.11ax multi user MIMO SIG-B
// for the channel index one and the user index one.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:CFIeld:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:CFIeld:CRU?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:CFIeld:RUALlocation?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:CFIeld:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:CODing?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:DCM?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:MCS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:NSTS?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:REServed?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:SPAConfig?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:STAid?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:HEB:CHANnel1:UFIeld1:TXBeamform?
// *****************************************************************************
// Retrieve the reported values of HE_TB-SIG field for 802.11ax trigger 
// based uplink single user MIMO PPDU.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:BSSColor?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:BW?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:CRC?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:FORMat?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:REServed1?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:REServed2?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:REServed3?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:SPATialreuse1?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:SPATialreuse2?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:TAIL?
FETCh:WLAN:MEAS:MEValuation:SINFo:HETB:TXOP?
Top