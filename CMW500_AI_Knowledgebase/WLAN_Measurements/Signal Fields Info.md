# Signal Fields Info

Module: WLAN Measurements
Source: e0c4f9fc564d4732.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Signal Fields Info
Signal Fields Info
The commands in this section return the reported values of signal fields according to the used standard. See also 
"View TX Measurement (Scalar) for Signal Fields Info"
.
List of Commands
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:CFIeld:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:CFIeld:CRU?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:CFIeld:RUALlocation?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:CFIeld:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:CODing?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:DCM?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:MCS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:NSTS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:REServed?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:SPAConfig?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:STAid?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEB:CHANnel<ch_index>:UFIeld<usr_index>:TXBeamform?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:BDCM?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:BMCS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:BSSColor?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:BW?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:DOPPler?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:GILTfsize?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:LDPC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:NLTFsymbols?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:NSBSymbols?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:PEDisambig?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:PFECpadding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:REServed?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:SBCompress?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:SPATialreuse?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:STBC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:TXOP?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HEMU:ULDL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:BEAMchange?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:BSSColor?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:BW?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:CODing?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:DCM?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:DOPPler?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:FORMat?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:GILTfsize?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:LDPC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:MCS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:NSTS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:PEDisambig?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:PFECpadding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:REServed<index>?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:SPATialreuse?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:STBC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:TXBF?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:TXOP?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HESU:ULDL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:BSSColor?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:BW?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:FORMat?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:REServed<index>?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:SPATialreuse<index>?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HETB:TXOP?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:AGGRegation?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:CBW?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:FECCoding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:HTLength?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:MCS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:NESS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:NSOunding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:REServed?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:SHORtgi?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:SMOothing?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:STBCoding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:HTSig:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:LSIG:LENGth?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:LSIG:PARity?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:LSIG:RATE?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:LSIG:REServed?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:LSIG:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:BEAMformed?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:BW?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:CRC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:FECCoding?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:GID?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:LDPC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:PAID?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:REServed<index>?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:SDISambig?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:SGI?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:SMCS?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:STBC?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:SUNSts?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:TAIL?
FETCh:WLAN:MEAS<i>:MEValuation:SINFo:VHTSig:TXOP?
Top