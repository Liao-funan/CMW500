# Performing a Single-Shot BLER Measurement

Module: LTE Signaling
Source: 1ad7b8e9c5a74655.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
BLER Tests
 > 
Performing a Single-Shot BLER Measurement
Performing a Single-Shot BLER Measurement
// *****************************************************************************
// Start a single-shot BLER measurement (one measurement cycle).
// *****************************************************************************
CONFigure:LTE:SIGN:EBLer:REPetition SING
CONFigure:LTE:SIGN:EBLer:SCONdition NONE
INIT:LTE:SIGN:EBLer
// *****************************************************************************
// Return BLER and throughput single results for a SISO single carrier
// configuration.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:ABSolute?
FETCh:LTE:SIGN:EBLer:RELative?
// *****************************************************************************
// Return BLER and throughput single results for a MIMO single carrier 
// configuration:
// Overall absolute and relative results, absolute results for stream 1 and 
// stream 2, relative results for stream 1 and stream 2.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:PCC:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:RELative?
FETCh:LTE:SIGN:EBLer:PCC:STReam1:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:STReam2:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:STReam1:RELative?
FETCh:LTE:SIGN:EBLer:PCC:STReam2:RELative?
// *****************************************************************************
// Return throughput traces for a MIMO configuration with CA and two carriers:
// Sum of all PCC plus SCC streams, sum of all PCC streams,
// sum of all SCC streams, throughput per stream.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:ALL?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:PCC?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:SCC?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:PCC:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:PCC:STReam2?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:SCC:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:SCC:STReam2?
// *****************************************************************************
// Return CQI single results for a MIMO configuration with PCC and SCC1.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:PCC:CQIReporting:STReam1?
FETCh:LTE:SIGN:EBLer:PCC:CQIReporting:STReam2?
FETCh:LTE:SIGN:EBLer:SCC:CQIReporting:STReam1?
FETCh:LTE:SIGN:EBLer:SCC:CQIReporting:STReam2?
// *****************************************************************************
// Return CQI bar graphs and median CQI traces for a MIMO configuration with
// carrier aggregation (PCC and SCC1).
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:TRACe:CQIReporting:PCC:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:CQIReporting:PCC:STReam2?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:PCC:MCQI:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:PCC:MCQI:STReam2?
FETCh:LTE:SIGN:EBLer:TRACe:CQIReporting:SCC:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:CQIReporting:SCC:STReam2?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:SCC:MCQI:STReam1?
FETCh:LTE:SIGN:EBLer:TRACe:THRoughput:SCC:MCQI:STReam2?
// *****************************************************************************
// Return RI and PMI bar graphs for PCC and SCC1.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:PCC:RI?
FETCh:LTE:SIGN:EBLer:PCC:PMI:RI1?
FETCh:LTE:SIGN:EBLer:PCC:PMI:RI2?
FETCh:LTE:SIGN:EBLer:PCC:PMI:RI3?
FETCh:LTE:SIGN:EBLer:PCC:PMI:RI4?
FETCh:LTE:SIGN:EBLer:SCC:RI?
FETCh:LTE:SIGN:EBLer:SCC:PMI:RI1?
FETCh:LTE:SIGN:EBLer:SCC:PMI:RI2?
FETCh:LTE:SIGN:EBLer:SCC:PMI:RI3?
FETCh:LTE:SIGN:EBLer:SCC:PMI:RI4?
// *****************************************************************************
// Return uplink BLER results for PCC and SCC1.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:PCC:UPLink?
FETCh:LTE:SIGN:EBLer:SCC:UPLink?
// *****************************************************************************
// Return entire HARQ tables for a MIMO configuration with PCC and SCC1.
// *****************************************************************************
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam1:TRANsmission:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam1:TRANsmission:RELative?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam2:TRANsmission:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam2:TRANsmission:RELative?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam1:SUBFrame:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam1:SUBFrame:RELative?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam2:SUBFrame:ABSolute?
FETCh:LTE:SIGN:EBLer:PCC:HARQ:STReam2:SUBFrame:RELative?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam1:TRANsmission:ABSolute?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam1:TRANsmission:RELative?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam2:TRANsmission:ABSolute?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam2:TRANsmission:RELative?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam1:SUBFrame:ABSolute?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam1:SUBFrame:RELative?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam2:SUBFrame:ABSolute?
FETCh:LTE:SIGN:EBLer:SCC:HARQ:STReam2:SUBFrame:RELative?
Top