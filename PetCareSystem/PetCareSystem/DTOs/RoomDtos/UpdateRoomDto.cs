﻿using System.ComponentModel.DataAnnotations;

namespace PetCareSystem.DTOs.RoomDtos;

public class UpdateRoomDto
{
	[Required]
	public int Id { get; set; }
	[Required]
	public string Name { get; set; }
	[Required]
	public decimal Price { get; set; }
	[Required]
	public string Description { get; set; }
}