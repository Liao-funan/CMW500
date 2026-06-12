# Retrieving Information Provided by the UE (Signaling)

Module: WCDMA Signaling
Source: dcd07012bf644c12.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Retrieving Information Provided by the UE (Signaling)
Retrieving Information Provided by the UE (Signaling)
// *****************************************************************************
// Wait until all requested measurement reports have been received.
// Query UE measurement reports for the current cell, carrier 2, and
// two neighbor cells of each technology.
// *****************************************************************************
WHILE FETCh:WCDMa:SIGN:UEReport:STATe <> "RDY"
SENSe:WCDMa:SIGN:UEReport:CCELl?
SENSe:WCDMa:SIGN:UEReport:NCELl2?
SENSe:WCDMa:SIGN:UEReport:NCELl:WCDMa:CELL1?
SENSe:WCDMa:SIGN:UEReport:NCELl:WCDMa:CELL2?
SENSe:WCDMa:SIGN:UEReport:NCELl:GSM:CELL1?
SENSe:WCDMa:SIGN:UEReport:NCELl:GSM:CELL2?
SENSe:WCDMa:SIGN:UEReport:NCELl:LTE:CELL1?
SENSe:WCDMa:SIGN:UEReport:NCELl:LTE:CELL2?
// *****************************************************************************
// Query all UE information results.
// *****************************************************************************
SENSe:WCDMa:SIGN:UESinfo:CONNection:CIRCuit?
SENSe:WCDMa:SIGN:UESinfo:EMERgency?
SENSe:WCDMa:SIGN:UESinfo:ESCategory?
SENSe:WCDMa:SIGN:UESinfo:CONNection:PACKet?
SENSe:WCDMa:SIGN:UESinfo:DINFo?
SENSe:WCDMa:SIGN:UESinfo:RITYpe?
SENSe:WCDMa:SIGN:UESinfo:RIDentity?
SENSe:WCDMa:SIGN:UESinfo:IMEI?
SENSe:WCDMa:SIGN:UESinfo:CNUMber?
SENSe:WCDMa:SIGN:UESinfo:DNUMber?
SENSe:WCDMa:SIGN:UESinfo:TTY?
SENSe:WCDMa:SIGN:UESinfo:DULalignment?
SENSe:WCDMa:SIGN:UESinfo:UEADdress:IPV4?
SENSe:WCDMa:SIGN:UESinfo:UEADdress:IPV6?
SENSe:WCDMa:SIGN:UESinfo:APN?
SENSe:WCDMa:SIGN:UESinfo:RRC?
// *****************************************************************************
// Query all UE capability results.
// *****************************************************************************
SENSe:WCDMa:SIGN:UECapability:GENeral?
SENSe:WCDMa:SIGN:UECapability:HSDPa?
SENSe:WCDMa:SIGN:UECapability:HSUPa?
SENSe:WCDMa:SIGN:UECapability:PDCP?
SENSe:WCDMa:SIGN:UECapability:RLC?
SENSe:WCDMa:SIGN:UECapability:PDOWnlink?
SENSe:WCDMa:SIGN:UECapability:PUPLink?
SENSe:WCDMa:SIGN:UECapability:RFParameter?
SENSe:WCDMa:SIGN:UECapability:RFParameter:BAND?
SENSe:WCDMa:SIGN:UECapability:RFParameter:BAND:NC2?
SENSe:WCDMa:SIGN:UECapability:RFParameter:BC?
SENSe:WCDMa:SIGN:UECapability:RFParameter:BCList?
SENSe:WCDMa:SIGN:UECapability:MMODe?
SENSe:WCDMa:SIGN:UECapability:MRAT?
SENSe:WCDMa:SIGN:UECapability:UEPosition?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs:GAL?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs:GLON?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs:MGPS?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs:QZSS?
SENSe:WCDMa:SIGN:UECapability:UEPosition:GANSs:SBAS?
SENSe:WCDMa:SIGN:UECapability:MEASurement?
SENSe:WCDMa:SIGN:UECapability:MEASurement:CMODe:GSM?
SENSe:WCDMa:SIGN:UECapability:MEASurement:CMODe:LTE?
SENSe:WCDMa:SIGN:UECapability:MEASurement:CMODe:WCDMa?
SENSe:WCDMa:SIGN:UECapability:MEASurement:CMODe:WCDMa:MCARrier?
SENSe:WCDMa:SIGN:UECapability:CODec:GSM?
SENSe:WCDMa:SIGN:UECapability:CODec:UMTS?
SENSe:WCDMa:SIGN:UECapability:IMSVoice?
Top