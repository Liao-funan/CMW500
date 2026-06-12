# Configuring Physical Cell Setup

Module: LTE Signaling
Source: 9d5e6235cb2040c2.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Physical Cell Setup
Configuring Physical Cell Setup
// *****************************************************************************
// Define cell bandwidth and physical cell ID for PCC and SCC1.
// Select cyclic prefix. Allow 64-QAM in the uplink.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:BANDwidth:PCC:DL B100
CONFigure:LTE:SIGN:CELL:BANDwidth:SCC:DL B100
CONFigure:LTE:SIGN:CELL:PCC:PCID 10
CONFigure:LTE:SIGN:CELL:SCC:PCID 15
CONFigure:LTE:SIGN:CELL:CPRefix NORM
CONFigure:LTE:SIGN:CELL:ULSupport:QAM64:ENABle ON
// *****************************************************************************
// Configure normal uplink signal (not SRS).
// Configure PCC SRS settings for later use.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:PCC:SRS:ENABle OFF
CONFigure:LTE:SIGN:CELL:PCC:SRS:MCENable ON
CONFigure:LTE:SIGN:CELL:PCC:SRS:BWConfig 7
CONFigure:LTE:SIGN:CELL:PCC:SRS:SFConfig 3
CONFigure:LTE:SIGN:CELL:PCC:SRS:DCONfig ON
CONFigure:LTE:SIGN:CELL:PCC:SRS:DBANdwidth 3
CONFigure:LTE:SIGN:CELL:PCC:SRS:HBANdwidth 3
CONFigure:LTE:SIGN:CELL:PCC:SRS:SCINdex:TDD 0
CONFigure:LTE:SIGN:CELL:PCC:SRS:SCINdex:FDD 7
CONFigure:LTE:SIGN:CELL:PCC:SRS:POFFset 4
// *****************************************************************************
// Select UL/DL config and special subframe config for PCC and SCC1.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:TDD:SPECific ON
CONFigure:LTE:SIGN:CELL:ULDL 1
CONFigure:LTE:SIGN:CELL:SCC1:ULDL 3
CONFigure:LTE:SIGN:CELL:SSUBframe 5
CONFigure:LTE:SIGN:CELL:SCC1:SSUBframe 7
// *****************************************************************************
// PRACH settings: answer preambles, set power step size,
// PRACH configuration index, frequency offset,
// logical root sequence index and zero correlation zone config.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:PRACh:NRPReambles OFF
CONFigure:LTE:SIGN:CELL:PRACh:PRSTep P4DB
CONFigure:LTE:SIGN:CELL:PRACh:PCINdex:FDD 15
CONFigure:LTE:SIGN:CELL:PRACh:PCINdex:TDD 15
CONFigure:LTE:SIGN:CELL:PRACh:PFOFfset 10
CONFigure:LTE:SIGN:CELL:PRACh:LRSindex 120
CONFigure:LTE:SIGN:CELL:PRACh:ZCZConfig 5
// *****************************************************************************
// CSAT settings: enable CSAT for SCC 1, LDS every 80 ms,
// ON/OFF 20 ms, periodic MAC activation.
// *****************************************************************************
CONFigure:LTE:SIGN:CELL:SCC1:CSAT:ENABle ON
CONFigure:LTE:SIGN:CELL:SCC1:CSAT:DMTCperiod M80
CONFigure:LTE:SIGN:CELL:SCC1:SCMuting:ONSDuration 20
CONFigure:LTE:SIGN:CELL:SCC1:SCMuting:OFFSduration 20
CONFigure:LTE:SIGN:CELL:SCC1:SCMuting:PMAC ON
Top