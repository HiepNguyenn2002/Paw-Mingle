﻿using System.ComponentModel.DataAnnotations.Schema;

namespace PetCareSystem.Models;

public class PetRoom
{
	[ForeignKey("Pet")]
	public int PetId { get; set; }
	public Pet Pet { get; set; }

	[ForeignKey("Room")]
	public int RoomId { get; set; }
	public Room Room { get; set; }

	public DateTime CheckIn { get; set; }
	public DateTime CheckOut { get; set; }
	public bool IsIn { get; set; }
	public decimal TotalPrice { get; set; }
	public string? Notes { get; set; }
}