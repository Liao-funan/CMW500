# Performing a Continuous BLER Measurement

Module: LTE Signaling
Source: e6f30425481f4e02.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
BLER Tests
 > 
Performing a Continuous BLER Measurement
Performing a Continuous BLER Measurement
// *****************************************************************************
// Start a continuous BLER measurement.
// Wait until the measurement is really running.
// *****************************************************************************
CONFigure:LTE:SIGN:EBLer:REPetition CONT
CONFigure:LTE:SIGN:EBLer:SCONdition NONE
INIT:LTE:SIGN:EBLer
WHILE FETCh:LTE:SIGN:EBLer:STATe:ALL? <> "RUN","ADJ","ACT"
// *****************************************************************************
// Monitor intermediate BLER results for a SISO single carrier configuration,
// by sending the following commands periodically.
// *****************************************************************************
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:RELative?
// *****************************************************************************
// Monitor intermediate BLER results for a MIMO configuration with carrier
// aggregation and two carriers, by sending the following commands periodically.
// *****************************************************************************
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:RELative?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:STReam1:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:STReam2:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:STReam1:RELative?
FETCh:INTermediate:LTE:SIGN:EBLer:PCC:STReam2:RELative?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:RELative?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:STReam1:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:STReam2:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:STReam1:RELative?
FETCh:INTermediate:LTE:SIGN:EBLer:SCC:STReam2:RELative?
// *****************************************************************************
// Alternatively monitor the sum of all PCC and SCC streams.
// *****************************************************************************
FETCh:INTermediate:LTE:SIGN:EBLer:ALL:ABSolute?
FETCh:INTermediate:LTE:SIGN:EBLer:ALL:RELative?
Top