using Application;
using Application.Activities.DTOs;
using Application.Validators;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivityValidator : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{

    public CreateActivityValidator() : base(x => x.ActivityDto)
    {

    }
}