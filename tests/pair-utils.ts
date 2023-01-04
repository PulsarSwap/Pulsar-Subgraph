import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Approval,
  CancelLongTermOrder,
  InitialLiquidityProvided,
  InstantSwapAToB,
  InstantSwapBToA,
  LiquidityProvided,
  LiquidityRemoved,
  LongTermSwapAToB,
  LongTermSwapBToA,
  Transfer,
  WithdrawProceedsFromLongTermOrder
} from "../generated/Pair/Pair"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createCancelLongTermOrderEvent(
  addr: Address,
  orderId: BigInt,
  unsoldAmount: BigInt,
  purchasedAmount: BigInt
): CancelLongTermOrder {
  let cancelLongTermOrderEvent = changetype<CancelLongTermOrder>(newMockEvent())

  cancelLongTermOrderEvent.parameters = new Array()

  cancelLongTermOrderEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  cancelLongTermOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  cancelLongTermOrderEvent.parameters.push(
    new ethereum.EventParam(
      "unsoldAmount",
      ethereum.Value.fromUnsignedBigInt(unsoldAmount)
    )
  )
  cancelLongTermOrderEvent.parameters.push(
    new ethereum.EventParam(
      "purchasedAmount",
      ethereum.Value.fromUnsignedBigInt(purchasedAmount)
    )
  )

  return cancelLongTermOrderEvent
}

export function createInitialLiquidityProvidedEvent(
  addr: Address,
  lpTokenAmount: BigInt,
  amountA: BigInt,
  amountB: BigInt
): InitialLiquidityProvided {
  let initialLiquidityProvidedEvent = changetype<InitialLiquidityProvided>(
    newMockEvent()
  )

  initialLiquidityProvidedEvent.parameters = new Array()

  initialLiquidityProvidedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  initialLiquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "lpTokenAmount",
      ethereum.Value.fromUnsignedBigInt(lpTokenAmount)
    )
  )
  initialLiquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "amountA",
      ethereum.Value.fromUnsignedBigInt(amountA)
    )
  )
  initialLiquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "amountB",
      ethereum.Value.fromUnsignedBigInt(amountB)
    )
  )

  return initialLiquidityProvidedEvent
}

export function createInstantSwapAToBEvent(
  addr: Address,
  amountAIn: BigInt,
  amountBOut: BigInt
): InstantSwapAToB {
  let instantSwapAToBEvent = changetype<InstantSwapAToB>(newMockEvent())

  instantSwapAToBEvent.parameters = new Array()

  instantSwapAToBEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  instantSwapAToBEvent.parameters.push(
    new ethereum.EventParam(
      "amountAIn",
      ethereum.Value.fromUnsignedBigInt(amountAIn)
    )
  )
  instantSwapAToBEvent.parameters.push(
    new ethereum.EventParam(
      "amountBOut",
      ethereum.Value.fromUnsignedBigInt(amountBOut)
    )
  )

  return instantSwapAToBEvent
}

export function createInstantSwapBToAEvent(
  addr: Address,
  amountBIn: BigInt,
  amountAOut: BigInt
): InstantSwapBToA {
  let instantSwapBToAEvent = changetype<InstantSwapBToA>(newMockEvent())

  instantSwapBToAEvent.parameters = new Array()

  instantSwapBToAEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  instantSwapBToAEvent.parameters.push(
    new ethereum.EventParam(
      "amountBIn",
      ethereum.Value.fromUnsignedBigInt(amountBIn)
    )
  )
  instantSwapBToAEvent.parameters.push(
    new ethereum.EventParam(
      "amountAOut",
      ethereum.Value.fromUnsignedBigInt(amountAOut)
    )
  )

  return instantSwapBToAEvent
}

export function createLiquidityProvidedEvent(
  addr: Address,
  lpTokenAmount: BigInt,
  amountAIn: BigInt,
  amountBIn: BigInt
): LiquidityProvided {
  let liquidityProvidedEvent = changetype<LiquidityProvided>(newMockEvent())

  liquidityProvidedEvent.parameters = new Array()

  liquidityProvidedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  liquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "lpTokenAmount",
      ethereum.Value.fromUnsignedBigInt(lpTokenAmount)
    )
  )
  liquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "amountAIn",
      ethereum.Value.fromUnsignedBigInt(amountAIn)
    )
  )
  liquidityProvidedEvent.parameters.push(
    new ethereum.EventParam(
      "amountBIn",
      ethereum.Value.fromUnsignedBigInt(amountBIn)
    )
  )

  return liquidityProvidedEvent
}

export function createLiquidityRemovedEvent(
  addr: Address,
  lpTokenAmount: BigInt,
  amountAOut: BigInt,
  amountBOut: BigInt
): LiquidityRemoved {
  let liquidityRemovedEvent = changetype<LiquidityRemoved>(newMockEvent())

  liquidityRemovedEvent.parameters = new Array()

  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "lpTokenAmount",
      ethereum.Value.fromUnsignedBigInt(lpTokenAmount)
    )
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "amountAOut",
      ethereum.Value.fromUnsignedBigInt(amountAOut)
    )
  )
  liquidityRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "amountBOut",
      ethereum.Value.fromUnsignedBigInt(amountBOut)
    )
  )

  return liquidityRemovedEvent
}

export function createLongTermSwapAToBEvent(
  addr: Address,
  amountAIn: BigInt,
  orderId: BigInt
): LongTermSwapAToB {
  let longTermSwapAToBEvent = changetype<LongTermSwapAToB>(newMockEvent())

  longTermSwapAToBEvent.parameters = new Array()

  longTermSwapAToBEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  longTermSwapAToBEvent.parameters.push(
    new ethereum.EventParam(
      "amountAIn",
      ethereum.Value.fromUnsignedBigInt(amountAIn)
    )
  )
  longTermSwapAToBEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return longTermSwapAToBEvent
}

export function createLongTermSwapBToAEvent(
  addr: Address,
  amountBIn: BigInt,
  orderId: BigInt
): LongTermSwapBToA {
  let longTermSwapBToAEvent = changetype<LongTermSwapBToA>(newMockEvent())

  longTermSwapBToAEvent.parameters = new Array()

  longTermSwapBToAEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  longTermSwapBToAEvent.parameters.push(
    new ethereum.EventParam(
      "amountBIn",
      ethereum.Value.fromUnsignedBigInt(amountBIn)
    )
  )
  longTermSwapBToAEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )

  return longTermSwapBToAEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createWithdrawProceedsFromLongTermOrderEvent(
  addr: Address,
  orderId: BigInt,
  proceeds: BigInt
): WithdrawProceedsFromLongTermOrder {
  let withdrawProceedsFromLongTermOrderEvent = changetype<
    WithdrawProceedsFromLongTermOrder
  >(newMockEvent())

  withdrawProceedsFromLongTermOrderEvent.parameters = new Array()

  withdrawProceedsFromLongTermOrderEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  withdrawProceedsFromLongTermOrderEvent.parameters.push(
    new ethereum.EventParam(
      "orderId",
      ethereum.Value.fromUnsignedBigInt(orderId)
    )
  )
  withdrawProceedsFromLongTermOrderEvent.parameters.push(
    new ethereum.EventParam(
      "proceeds",
      ethereum.Value.fromUnsignedBigInt(proceeds)
    )
  )

  return withdrawProceedsFromLongTermOrderEvent
}
